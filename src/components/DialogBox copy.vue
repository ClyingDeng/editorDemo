<template>
  <div class="dialogBox">
    <div class="scroll">
      <div class="scrollTitle"><div class="titleText">标题</div></div>
      <div class="scrollContent">
        <div class="scrollLeft">
          <ul class="firstUl">
            <li
              class="firstLi"
              v-for="(item, index) in liData"
              :key="item.tid"
              :class="{
                isSecond: item.level === '2',
                isActive: index == activeMenu,
              }"
              @click="jump(index)"
            >
              <div class="liContent">
                <div class="icon">
                  <img :src="'./assets/' + item.icon + '.svg'" alt="" />
                </div>
                <div class="text">
                  <p class="leftTitle">{{ item.title }}</p>
                  <p class="time">{{ item.time }}</p>
                </div>
              </div>
              <ul v-if="item.secondSj" class="secondUl">
                <li
                  class="secondLi"
                  v-for="(item1, index2) in item.secondSj"
                  :key="item1.tid"
                  @click="jump(index, index2)"
                >
                  <div class="icon">
                    <img :src="'./assets/' + item.icon + '.svg'" alt="" />
                  </div>
                  <div class="text">
                    <p class="leftTitle">{{ item1.title }}</p>
                    <p class="time">{{ item1.time }}</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="scrollRight" id="scrollBox">
          <div class="first" v-for="item in liData" :key="item.tid">
            <div class="rightContent">
              <!-- <a :name="item.tid"> -->
              <div class="rTitle">{{ item.title }}</div>
              <!-- </a> -->
              <div class="rListContent">
                <div
                  class="ritem"
                  v-for="item1 in item.detail"
                  :key="item1.name"
                >
                  <p class="name">{{ item1.name }}</p>
                  <p class="value">{{ item1.value }}</p>
                </div>
              </div>
            </div>
            <!-- 二级标题 -->
            <div v-if="item.secondSj">
              <div class="rListSecondContent">
                <div
                  class="rightContent secondTitle"
                  v-for="item1 in item.secondSj"
                  :key="item1.name"
                >
                  <!-- <a :name="item1.tid"> -->
                  <div class="rSecondTitle">{{ item1.title }}</div>
                  <!-- </a> -->
                  <div class="rListContent">
                    <div
                      class="ritem"
                      v-for="item2 in item1.detail"
                      :key="item2.name"
                      :class="item2.value.length > 20 ? 'oneLine' : ''"
                    >
                      <p class="name">{{ item2.name }}</p>
                      <p class="value">{{ item2.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="second"></div>
          <div class="third"></div> -->
          <!-- <div class="fourth">
            <div class="fourOne"></div>
            <div class="fourTwo"></div>
            <div class="fourThree"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {
  private liData: any[] = [
    {
      tid: 'dd9d6f1361f142d6910e963b040f9f9b',
      level: '1',
      title: '标题一',
      time: '2021-01-20 07:03:30',
      icon: 'file',
      detail: [
        {
          name: '事件名称1',
          value: '今天怎么了',
        },
        {
          name: '事件名称2',
          value: '事件名称详情啊啊啊',
        },
        {
          name: '事件名称3',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称4',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称5',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称6',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称7',
          value: '事件名称的详情请',
        },
      ],
    },
    {
      tid: 'df9d6f1361f142d6910e903b040f9f9b',
      level: '2',
      title: '标题二',
      time: '2021-01-20 07:03:30',
      icon: 'file',
      detail: [
        {
          name: '事件名称1',
          value: '今天怎么了',
        },
        {
          name: '事件名称2',
          value: '事件名称详情啊啊啊',
        },
        {
          name: '事件名称3',
          value: '事件名称的详情请',
        },
      ],
      secondSj: [
        {
          tid: 'df9d6f1361f142d6910e903b040s9f9b',
          icon: 'file',
          title: '标题二-1',
          time: '2021-01-21 07:03:30',
          detail: [
            {
              name: '事件名称1',
              value: '今天怎么了',
            },
            {
              name: '事件名称2',
              value: '事件名称详情啊啊啊',
            },
            {
              name: '事件名称3',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称4',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称5',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称6',
              value:
                '事件名称的详情请事件名称的详情请事件名称的详情请事件名称的详情请事件名称的详情请',
            },
          ],
        },
        {
          tid: 'df9d6s1361f142d6910e903b040f9f9b',
          bt: '二级标题',
          icon: 'file',
          title: '标题二-2',
          time: '2021-01-21 07:03:30',
          detail: [
            {
              name: '事件名称1',
              value: '今天怎么了',
            },
            {
              name: '事件名称2',
              value: '事件名称详情啊啊啊',
            },
            {
              name: '事件名称3',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称4',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称5',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称6',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称7',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称11',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称8',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称9',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称10',
              value: '事件名称的详情请',
            },
          ],
        },
        {
          tid: 'df9d6f1361f142d6910e903b040f9f94',
          bt: '二级标题',
          icon: 'file',
          title: '标题二-3',
          time: '2021-01-21 07:03:30',
          detail: [
            {
              name: '事件名称1',
              value: '今天怎么了',
            },
            {
              name: '事件名称2',
              value: '事件名称详情啊啊啊',
            },
            {
              name: '事件名称3',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称4',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称5',
              value: '事件名称的详情请',
            },
            {
              name: '事件名称6',
              value:
                '事件名称的详情请事件名称的详情请事件名称的详情请事件名称的详情请事件名称的详情请',
            },
          ],
        },
      ],
    },
    {
      tid: 'dd9d6f1361f142d6999e963b0401af9b',
      level: '1',
      title: '标题三',
      time: '2021-01-20 07:03:30',
      icon: 'file',
      detail: [
        {
          name: '事件名称1',
          value: '今天怎么了',
        },
        {
          name: '事件名称2',
          value: '事件名称详情啊啊啊',
        },
        {
          name: '事件名称3',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称4',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称5',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称6',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称7',
          value: '事件名称的详情请',
        },
      ],
    },
    {
      tid: 'dd9d6f1361f142d6999e963b040faf9b',
      level: '1',
      title: '标题四',
      time: '2021-01-20 07:03:30',
      icon: 'file',
      detail: [
        {
          name: '事件名称1',
          value: '今天怎么了',
        },
        {
          name: '事件名称2',
          value: '事件名称详情啊啊啊',
        },
        {
          name: '事件名称3',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称4',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称5',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称6',
          value: '事件名称的详情请',
        },
        {
          name: '事件名称7',
          value: '事件名称的详情请',
        },
      ],
    },
  ];
  private activeMenu: number = 0;
  private mounted() {
    this.listener();
  }
  private jump(index: number, number?: number) {
    this.activeMenu = index;
    let jump: any = document.querySelectorAll('.first');
    let total;
    if (number === 0 || number) {
      let second: any = document.querySelectorAll('.secondTitle');
      // console.log(number, second[number].offsetTop);
      total = second[number].offsetTop - jump[0].offsetTop;
      console.log('number', number, total);
    } else {
      total = jump[index].offsetTop - jump[0].offsetTop;
      console.log('index', typeof number, total);
    }
    (document.getElementById('scrollBox') as HTMLElement).scrollTo({
      top: total,
      behavior: 'smooth',
    });
  }
  private listener() {
    let scrollBox: any = document.getElementById('scrollBox');
    const topArr = [];
    let jump: any = document.querySelectorAll('.first');
    let that = this;
    scrollBox.addEventListener(
      'scroll',
      () => {
        const current_offset_top = scrollBox.scrollTop;
        for (let i = 0; i < jump.length; i++) {
          if (current_offset_top <= jump[i].offsetTop) {
            that.activeMenu = i;
            console.log(current_offset_top, jump[2].offsetTop, that.activeMenu);
            break;
          }
        }
      },
      false
    );
  }
}
</script>

<style lang="scss" scoped>
.dialogBox {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .scroll {
    width: 1080px;
    background: #134070;
    color: #f1f1f1;
    position: fixed;
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
      height: 600px;
      .scrollLeft {
        height: 600px;
        overflow: scroll;
        width: 25%;
        background: #0a2541;
        a {
          text-decoration: none;
        }
        .firstUl {
          font-size: 18px;
          list-style: none;
          .firstLi {
            cursor: pointer;
            padding: 10px 20px;
            margin: 5px 0;
            height: auto;
            .liContent {
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
          }
          .firstLi:hover,
          .isActive {
            background: #133355;
          }
        }
        .isSecond {
          .secondUl {
            top: 60px;
            width: 100%;
            font-size: 16px;
            padding-left: 5px;
            .secondLi {
              cursor: pointer;
              margin-top: 10px;
              height: 50px;
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
          .secondLi:hover,
          .isActive {
            background: #002955;
          }
        }
        // .isSecond :hover {
        //   .liContent {
        //     background: white;
        //   }
        // }
      }

      .scrollRight {
        // background: #103052;
        width: 75%;
        height: 600px;
        overflow: scroll;
        .first {
          border-top: 1px solid #184f92;
          .rightContent {
            padding-bottom: 10px;
            .rTitle {
              color: #f1f1f1;
              font-size: 20px;
              font-weight: bold;
              margin: 10px 0px 10px 20px;
              text-align: left;
            }
            .rSecondTitle {
              border-top: 1px solid #184f92;
              font-size: 18px;
              padding: 10px 0px 10px 20px;
              text-align: left;
            }

            .rListContent {
              // background: lemonchiffon;
              display: flex;
              flex-wrap: wrap;
              padding-left: 20px;
              .ritem {
                width: 30%;
                margin: 10px;
                .name {
                  text-align: left;
                  color: #7ea8ea;
                }

                .value {
                  text-align: left;
                  white-space: nowrap;
                }
              }
              .oneLine {
                width: 100%;
                margin: 10px;
                .name,
                .value {
                  text-align: left;
                }
              }
              // .rListSecondContent{
            }
          }
        }
        .first:first-child {
          border-top: 1px solid transparent;
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