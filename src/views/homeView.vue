<template>
  <div id="home">
    <div class="home-selection">
      <el-select
        v-model="paramsForm.gender"
        placeholder="请选择性别"
        clearable
      >
        <el-option
          v-for="item in genders"
          :key="item"
          :value="item"
        >
        </el-option>
      </el-select>

      <el-select
        v-model="paramsForm.crowd"
        placeholder="请选择人群"
        clearable
      >
        <el-option
          v-for="item in crowds"
          :key="item"
          :value="item"
        >
        </el-option>
      </el-select>

      <el-select
        v-model="paramsForm.healthIndicator"
        placeholder="请选择健康类指标"
        clearable
        no-data-text="请先选择人群"
        @click="selectHealthIndicator"
      >
        <el-option
          v-for="item in healthIndicators"
          :key="item"
          :value="item"
        >
        </el-option>
      </el-select>

    </div>

    <div class="detail-span">

      <div
        class="detail0"
        v-if="showDetailType === 0"
      >
        <el-select
          v-model="paramsForm.detailedName"
          placeholder="请选择具体查询名称"
          clearable
          no-data-text="请先选择人群和健康类指标"
        >
          <el-option
            v-for="item in detailedNames"
            :key="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>

      <div
        class="detail1"
        v-if="showDetailType === 1"
      >
        <el-input
          v-model="paramsForm.detailedName"
          placeholder="请输入收缩压或舒张压/mmHg"
          clearable
        />
        <!-- <el-input
          v-model="paramsForm.detailedName"
          placeholder="请输入舒张压/mmHg"
          clearable
        /> -->
      </div>

    </div>

    <div class="btn">
      <el-button
        type="primary"
        :disabled="!isPrimary"
        @click="searchIndicatorLimit"
      >点击搜索</el-button>
      <el-button
        @click="handleReset"
      >重置</el-button>
    </div>

    <div class="result-show">
      <el-table :data="tableData">
        <el-table-column prop="max" label="健康类指标参考值-上限"/>
        <el-table-column prop="min" label="健康类指标参考值-下限"/>
        <el-table-column prop="unit" label="单位"/>
      </el-table>
    </div>

  </div>
</template>

<script>
import {
  getHealthIndicators,
  getDetailedNames,
  selectIndicatorLimit,
} from "../api/home";
import { ElMessage, ElLoading } from "element-plus";
export default {
  data() {
    return {
      loading: undefined,
      genders: ["男", "女", "男/女"],
      genders0: ["女"],
      genders1: ["男", "女", "男/女"],
      crowdsMale: ["中年人群", "婴儿", "儿童", "老年人"],
      crowdsFemale: [
        "妊娠早期",
        "备孕期",
        "妊娠晚期",
        "妊娠中期",
        "中年人群",
        "婴儿",
        "儿童",
        "老年人",
      ],
      crowds: [
        "妊娠早期",
        "备孕期",
        "妊娠晚期",
        "妊娠中期",
        "中年人群",
        "婴儿",
        "儿童",
        "老年人",
      ],
      healthIndicators: [],
      detailedNames: [],
      showDetailType: false,
      isPrimary: false,
      paramsForm: {
        gender: "",
        crowd: "",
        healthIndicator: "",
        detailedName: "",
      },
      tableData:[{
        min:"暂无数据",
        max:"暂无数据",
        unit:"暂无数据"
      }]
    };
  },
  watch: {
    paramsForm: {
      immediate: true, // 立即执行
      deep: true,
      handler(newVal) {
        this.checkCrowds();
        this.checkGenders();

        /* 当性别和人群都不为空时 */
        if (newVal.gender && newVal.crowd) {
          if (!newVal.healthIndicator) {
            // 健康类指标为空
            this.getHealthIndicators();
          } else if (newVal.healthIndicator) {
            //健康指标被选择
            this.getDetailedNames()
          }
        }else {
          this.paramsForm.healthIndicator = ""
          this.paramsForm.detailedName = ""
        }
        //所有选项都已经选择
        if(newVal.gender && newVal.crowd && newVal.healthIndicator && newVal.detailedName){
          this.isPrimary = true;
        }else this.isPrimary = false;
      },
    },
  },
  methods: {
    //根据性别，调整人群选项组
    checkCrowds() {
      if (this.paramsForm.gender === "女") {
        this.crowds = this.crowdsFemale;
      } else if (this.paramsForm.gender === "男") {
        this.crowds = this.crowdsMale;
      } else if (this.paramsForm.gender === "男/女") {
        this.crowds = this.crowdsMale;
      }
    },
    //根据人群，调整性别选项组
    checkGenders() {
      //特殊情况：人群选择妊娠XX,性别只能为女
      if (
        this.paramsForm.crowd === "妊娠早期" ||
        this.paramsForm.crowd === "备孕期" ||
        this.paramsForm.crowd === "妊娠晚期" ||
        this.paramsForm.crowd === "妊娠中期"
      ) {
        this.genders = this.genders0;
      } else this.genders = this.genders1;
    },
    //点击健康类指标
    selectHealthIndicator() {
      if (!this.paramsForm.gender) {
        //性别为空
        ElMessage({
          message: "在点击选择健康类指标前，请先选择性别！",
          type: "warning",
        });
      } else if (!this.paramsForm.crowd) {
        ElMessage({
          message: "在点击选择健康类指标前，请先选择人群！",
          type: "warning",
        });
      }
    },
    //请求健康类指标数组
    getHealthIndicators() {
      getHealthIndicators({
        gender: this.paramsForm.gender,
        crowd: this.paramsForm.crowd,
      })
        .then((res) => {
          this.healthIndicators = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //根据健康类指标，请求具体名称数组
    getDetailedNames() {
      //调整展示输入框还是选项框
      if (this.paramsForm.healthIndicator === "血压") {
        this.showDetailType = 1;
      } else {
        this.showDetailType = 0;
      }
      /* 请求具体名称 */
      if (this.showDetailType === 0) {
        getDetailedNames({
          gender: this.paramsForm.gender,
          crowd: this.paramsForm.crowd,
          healthy_indicator: this.paramsForm.healthIndicator,
        })
          .then((res) => {
            this.detailedNames = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //点击搜索按钮
    searchIndicatorLimit() {
      this.loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.1)",
      });
      selectIndicatorLimit({
        gender: this.paramsForm.gender,
        crowd: this.paramsForm.crowd,
        healthy_indicator: this.paramsForm.healthIndicator,
        specific_name: this.paramsForm.detailedName,
      })
        .then((res) => {
          console.log(res.data)
          if(!res.data.length){
            window.open('/nutrireq', '_blank')
            return  this.loading.close();;
          }
          if(!res.data[0].healthy_indicators_max){
            this.tableData[0].max = "无"
          }else this.tableData[0].max = res.data[0].healthy_indicators_max

          if(!res.data[0].healthy_indicators_min){
            this.tableData[0].min = "无"
          }else this.tableData[0].min = res.data[0].healthy_indicators_min
          
          if(!res.data[0].unit){
            this.tableData[0].unit = "无"
          }else this.tableData[0].unit = res.data[0].unit
          
          this.loading.close();
        })
        .catch((err) => {
          this.loading.close();
        });
    },
    //重置清空
    handleReset(){
      this.paramsForm = {
        gender:"",
        crowd:"",
        healthIndicator:"",
        detailedName:""
      }
      this.tableData=[{
        min:"暂无数据",
        max:"暂无数据",
        unit:"暂无数据"
      }]
    },
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.home-selection {
  height: 10vh;
  width: 80vw;
  margin: 20vh auto 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.el-input__inner {
  width: 12vw;
  height: 5vh;
}
.el-input__wrapper {
  font-size: 2vh;
  height: 5vh;
}
.el-select-dropdown__empty {
  font-size: 1.8vh;
}
.detail-span {
  width: 80vw;
  margin: 0 auto 5vh;
  height: 5vh;
}
.detail1 {
  display: flex;
  justify-content: space-evenly;
}
.detail1 > .el-input {
  width: 25vw;
}
.btn .el-button {
  height: 5vh;
  font-size: 2.2vh;
}
.result-show{
  width: 70vw;
  margin: 5vh auto 0;
}
.result-show .el-table__header{
  width: 100%;
}
.result-show .el-table__header th{
  text-align: center;
}
.result-show .el-table__cell{
  text-align: center !important;
  font-size: 2vh;
}
</style>