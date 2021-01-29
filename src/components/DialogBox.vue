<template>
  <div class="dialogBox">
    <div class="scroll">
      <div class="scrollTitle"><div class="titleText">标题</div></div>
      <div class="scrollContent">
        <div class="scrollLeft">
          <ul>
            <li>
              <div class="icon">
                <img src="../assets/file.svg" alt="" />
              </div>
              <div class="text">
                <p class="leftTitle">标题一</p>
                <p class="time">2021-01-29</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="../assets/file.svg" alt="" />
              </div>
              <div class="text">
                <p class="leftTitle">标题二</p>
                <p class="time">2021-01-29</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <img src="../assets/file.svg" alt="" />
              </div>
              <div class="text">
                <p class="leftTitle">标题三</p>
                <p class="time">2021-01-29</p>
              </div>
              <ul>
                <li>
                  <div class="icon">
                    <img src="../assets/file.svg" alt="" />
                  </div>
                  <div class="text">
                    <p class="leftTitle">标题三-1</p>
                    <p class="time">2021-01-29</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="../assets/file.svg" alt="" />
                  </div>
                  <div class="text">
                    <p class="leftTitle">标题三-1</p>
                    <p class="time">2021-01-29</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="../assets/file.svg" alt="" />
                  </div>
                  <div class="text">
                    <p class="leftTitle">标题三-1</p>
                    <p class="time">2021-01-29</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="scrollRight">
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
          <div class="fourth">
            <div class="fourOne"></div>
            <div class="fourTwo"></div>
            <div class="fourThree"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.dialogBox {
  .scroll {
    background: #134070;
    color: #f1f1f1;
    .scrollTitle {
      padding-left: 25px;
      padding-top: 10px;
      text-align: left;
      .titleText {
        font-size: 20px;
        height: 25px;
        width: 80px;
        line-height: 25px;
        text-align: center;
        border-bottom: 3px solid #2985f7;
      }
    }

    .scrollContent {
      background: #103052;
      display: flex;
      margin-top: 10px;
      .scrollLeft {
        width: 30%;
        background: #0a2541;
        ul {
          list-style: none;
          li {
            position: relative;
            padding-left: 20px;
            height: 70px;
            display: flex;
            align-items: center;
            .icon {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid #2477cf;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 35px;
                height: 35px;
              }
            }
            .text {
              margin-left: 20px;
              .leftTitle {
                height: 25px;
                line-height: 25px;
                text-align: left;
                color: #f1f1f1;
              }
              .time {
                font-size: 14px;
                color: #325c87;
              }
            }
            ul {
              position: absolute;
              top: 70px;
              width: 100%;
              li {
                
                height: 70px;
                display: flex;
                align-items: center;
                .icon {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  border: 1px solid #2477cf;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 25px;
                    height: 25px;
                  }
                }
              }
            }
          }
          li:hover {
            background: #133355;
          }
        }
      }

      .scrollRight {
        // background: #103052;
        .first {
          height: 300px;
          background: olivedrab;
        }

        .second {
          height: 800px;
          background: red;
        }

        .third {
          height: 500px;
          background: blue;
        }

        .fourth {
          height: 700px;
          background: olivedrab;
          .fourOne {
          }

          .fourTwo {
          }

          .fourThree {
          }
        }
      }
    }
  }
}
</style>