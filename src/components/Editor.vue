<template>
  <div class="editor">
    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>
    <!-- 编辑器容器 -->
    <div id="editor"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
// import SaveFile from '../utils/save';
@Component
export default class extends Vue {
  // 编辑器显示的初始内容
  private value: string = '';
  // 存储编辑器的实例
  private editor: any = '';
  // 语言改为中文
  private data: any = {
    time: '2021年1月24日0时至1月25日0时',
    name: '某某地方',
    jqData: [
      {
        category: '下发数',
        type: '下发数',
        fjCurrentPeriod: '10020',
        fjAverage: '123213',
        fjCompare: -11.6,
        pcsCurrentPeriod: '10020',
        pcsAverage: '123213',
        pcsCompare: 5.6,
      },
      {
        category: '下发数',
        type: '下发数',
        fjCurrentPeriod: '10020',
        fjAverage: '123213',
        fjCompare: -4.6,
        pcsCurrentPeriod: '10020',
        pcsAverage: '123213',
        pcsCompare: 11.2,
      },
      {
        category: '下发数',
        type: '下发数',
        fjCurrentPeriod: '10020',
        fjAverage: '123213',
        fjCompare: 1.6,
        pcsCurrentPeriod: '10020',
        pcsAverage: '123213',
        pcsCompare: -1,
      },
    ],
  };

  private mounted() {
    this.valueInit();
    this.initEditor();
  }
  private initEditor() {
    CKEditor.create(document.querySelector('#editor'), {
      toolbar: [
        'undo', // 撤销
        'redo', // 重做
        '|',
        'heading',
        '|',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'Underline',
        'numberedList',
        'bulletedList',
        'blockQuote',
        '|',
        'insertTable',
        '|',
        'alignment:left',
        'alignment:right',
        'alignment:center',
        'alignment:justify',
        '|',
        'Link',
        '|',
        'SaveFile',
      ],
      language: 'zh-cn',
      heading: {
        options: [
          {
            model: 'paragraph',
            title: 'Paragraph',
            class: 'ck-heading_paragraph',
          },
          {
            model: 'heading1',
            view: 'h1',
            title: 'Heading 1',
            class: 'ck-heading_heading1',
          },
          {
            model: 'heading2',
            view: 'h2',
            title: 'Heading 2',
            class: 'ck-heading_heading2',
          },
          {
            model: 'heading3',
            view: 'h3',
            title: 'Heading 3',
            class: 'ck-heading_heading3',
          },
          {
            model: 'heading4',
            view: 'h4',
            title: 'Heading 4',
            class: 'ck-heading_heading4',
          },
        ],
      },
      fontSize: {
        options: ['default', 14, 16, 18, 20, 22, 24],
      },
      fontFamily: {
        options: ['宋体', '黑体', '楷体', '微软雅黑'],
      },
    })
      .then((editor: any) => {
        const toolbarContainer: any = document.querySelector(
          '#toolbar-container'
        );
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        this.editor = editor; // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        editor.model.document.on('change:data', () => {
          // 把富文本编辑器获取到的内容传出去
          // console.log('llll', editor.getData());
          this.$emit('input', editor.getData());
        //   this.filterValue(editor.getData());
        });
        // 编辑的时候设置富文本编辑器的内容
        editor.setData(this.value);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  private valueInit() {
    let head = `<h1>上海市下发情况通报</h1>
      <h2 id="time">（${this.data.time}）</h2>
      <h3 id="name">【${this.data.name}】</h3>
      <table>
        <thead>
          <tr>
            <th colspan="2" rowspan="2">&nbsp;</th>
            <th colspan="3">总署</th>
            <th colspan="3">下分支</th>
          </tr>
          <tr>
            <th>当期</th>
            <th>上周平均数</th>
            <th>比较%</th>
            <th>当期</th>
            <th>上周平均数</th>
            <th>比较%</th>
          </tr>
        </thead>
        <tbody>`;
    let foot = ` </tbody>
      </table>
      <h5>说明：</h5>
      <p>1.情况下发数下发案件;</p>
      <p>2.上周平均值为上周一0点至本周一0点总情况合计除以一周天数。</p>`;
    let body: string = '';
    this.data.jqData.map(
      (_: any) =>
        (body += `<tr>
        <td>${_.category}</td>
        <td>${_.type}</td>
        <td>${_.fjCurrentPeriod}</td>
        <td>${_.fjAverage}</td>
        <td><span style="${
          _.fjCompare > 0
            ? 'color:hsl(0, 75%, 60%)'
            : 'color:hsl(210, 75%, 60%)'
        }">${_.fjCompare}</span></td>
        <td>${_.pcsCurrentPeriod}</td>
        <td>${_.pcsAverage}</td>
        <td><span style="${
          _.pcsCompare > 0
            ? 'color:hsl(0, 75%, 60%)'
            : 'color:hsl(210, 75%, 60%)'
        }">${_.pcsCompare}</span></td>
        </tr>`)
    );
    this.value = head + body + foot;
  }
}
</script>

<style lang="scss">
#editor {
  min-height: 380px;
  border: 1px solid #c4c4c4;
}
.ck-content {
  min-height: 380px;
  h1 {
    padding-top: 0.8em;
    border-bottom: 1px solid #e9e9e9;
    padding-block: 0.2em;
  }
  .table table {
    border: 2px double #333;
    th {
      text-align: center !important;
      padding: 5px;
      width: 80px;
    }
    td {
      text-align: center;
      padding: 5px 10px;
      width: 120px;
    }
    tbody {
      tr:nth-child(even) {
        background: #f9f9f9;
      }
    }
  }
}
</style>