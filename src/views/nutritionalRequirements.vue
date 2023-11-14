<template>
    <div class="nutritional-requirements">
        <div class="nutritional-tablecont">
            <div class="nutritional-table-tit">疾病人群营养需求表：</div>
            <table class="nutritional-table">
                <tr class="category1">
                    <td>营养素名称</td>
                    <td>指标名称</td>
                    <td>指标值单位</td>
                    <td>营养素需求参考值-下限</td>
                    <td>营养素需求参考值-上限</td>
                </tr>

                <tr class="category2">
                    <td rowspan="6">蛋白质</td>
                    <td>总蛋白质</td>
                    <td>g/d</td>
                    <!-- <td rowspan="6">g/d</td> -->
                    <td>66.2</td>
                    <td>76.2</td>
                </tr>
                <tr class="category3">
                    <td>赖氨酸</td>
                    <td>g/d</td>
                    <td>1</td>
                    <td></td>
                </tr>
                <tr class="category2">
                    <td>色氨酸</td>
                    <td>g/d</td>
                    <td>1.48</td>
                    <td></td>
                </tr>
                <tr class="category3">
                    <td>甲硫氨酸</td>
                    <td>g/d</td>
                    <td>1.6</td>
                    <td></td>
                </tr>
                <tr class="category2">
                    <td>精氨酸</td>
                    <td>g/d</td>
                    <td>4</td>
                    <td>24</td>
                </tr>
                <tr class="category3">
                    <td>甘氨酸</td>
                    <td>g/d</td>
                    <td>0.71</td>
                    <td></td>
                </tr>


                <tr class="category2">
                    <td  class="category3" rowspan="7">脂类</td>
                    <td>总脂肪</td>
                    <td>g/d</td>
                    <td>40</td>
                    <td>50</td>
                </tr>
                <tr class="category3">
                    <td>亚油酸</td>
                    <td>g/d</td>
                    <td>4</td>
                    <td>23</td>
                </tr>
                <tr class="category2">
                    <td>α-亚麻酸</td>
                    <td>g/d</td>
                    <td>1.6</td>
                    <td>1.8</td>
                </tr>
                <tr class="category3">
                    <td>EPA</td>
                    <td>g/d</td>
                    <td>0.3</td>
                    <td>6</td>
                </tr>
                <tr class="category2">
                    <td>DHA</td>
                    <td>g/d</td>
                    <td>0.6</td>
                    <td>3.7</td>
                </tr>
                <tr class="category3">
                    <td>不饱和脂肪酸/饱和脂肪酸</td>
                    <td>g/d</td>
                    <td>1</td>
                    <td>1.5</td>
                </tr>
                <tr class="category2">
                    <td>n-3多不饱和脂肪酸</td>
                    <td>g/d</td>
                    <td>2</td>
                    <td>4.8</td>
                </tr>

                <tr class="category3">
                    <td class="category2" rowspan="7">矿物质</td>
                    <td>钙</td>
                    <td>mg/d</td>
                    <td>400</td>
                    <td>2000</td>
                </tr>
                <tr class="category2">
                    <td>磷</td>
                    <td>mg/d</td>
                    <td>500</td>
                    <td></td>
                </tr>
                <tr class="category3">
                    <td>钾</td>
                    <td>mg/d</td>
                    <td>2340</td>
                    <td>4680</td>
                </tr>
                <tr class="category2">
                    <td>镁</td>
                    <td>mg/d</td>
                    <td>500</td>
                    <td>1000</td>
                </tr>
                <tr class="category3">
                    <td>钠</td>
                    <td>mg/d</td>
                    <td></td>
                    <td>2400</td>
                </tr>
                <tr class="category2">
                    <td>锌</td>
                    <td>mg/d</td>
                    <td>50</td>
                    <td></td>
                </tr>
                <tr class="category3">
                    <td>硒</td>
                    <td>ug/d</td>
                    <td>12.5</td>
                    <td>200</td>
                </tr>

                <tr class="category2">
                    <td class="category3" rowspan="7">维生素</td>
                    <td>VC</td>
                    <td>mg/d</td>
                    <td>500</td>
                    <td>1000</td>
                </tr>
                <tr class="category3">
                    <td>VD</td>
                    <td>IU/d</td>
                    <td>1000</td>
                    <td>4000</td>
                </tr>
                <tr class="category2">
                    <td>VE</td>
                    <td>mg/d</td>
                    <td>50</td>
                    <td>534.4</td>
                </tr>
                <tr class="category3">
                    <td>VB2</td>
                    <td>mg/d</td>
                    <td>1.6</td>
                    <td></td>
                </tr>
                <tr class="category2">
                    <td>VB2</td>
                    <td>VB6</td>
                    <td>20</td>
                    <td>200</td>
                </tr>
                <tr class="category3">
                    <td>VB2</td>
                    <td>VB12</td>
                    <td>1</td>
                    <td></td>
                </tr>
                <tr class="category2">
                    <td>VB2</td>
                    <td>叶酸</td>
                    <td>0.4</td>
                    <td>0.8</td>
                </tr>

                <tr class="category3">
                    <td class="category2" rowspan="2">其他</td>
                    <td>胆固醇</td>
                    <td>mg/d</td>
                    <td></td>
                    <td>300</td>
                </tr>
                <tr class="category2">
                    <td>膳食纤维</td>
                    <td>g/d</td>
                    <td>40</td>
                    <td>50</td>
                </tr>

                <tr class="category3">
                    <td>水</td>
                    <td>水</td>
                    <td>ml/d</td>
                    <td>1500</td>
                    <td>2000</td>
                </tr>

                <tr  class="category2">
                    <td>能量</td>
                    <td></td>
                    <td>kcal/d</td>
                    <td>1200</td>
                    <td>1800</td>
                </tr>

                <tr class="category3">
                    <td>碳水化合物</td>
                    <td>总碳水化合物</td>
                    <td>g/d</td>
                    <td>150</td>
                    <td>300</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nutritional-requirements{
    width: 100%;
    height: 100%;
    position: relative;
}
.nutritional-tablecont{
    width: 50vw;
    margin: 0 auto;
    padding-top: 10vh;
}
.nutritional-table-tit{
    font-size: 3vh;
    position: absolute;
    top: 0;
    margin: 3vh;
    left: 22vw;
}
.nutritional-table{
    color: rgb(0, 0, 0);
    margin: 0 auto;
    width: 100%;
    border-collapse:collapse;
    background-color: rgb(255, 255, 255);
    font-size: 2vh;
}
.nutritional-table td{
    border: 1px solid #CCCCCC;
    margin: 0;
    padding: 0;
}
.category1{/*最深色*/
    background-color: rgb(229, 229, 229);
}
.category2{/*浅色*/
    background-color: rgb(255, 255, 255);
}
.category3{/*深色*/
    background-color: rgb(245, 247, 250);
}
</style>
