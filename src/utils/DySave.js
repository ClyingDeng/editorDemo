import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import DyIconSave from './icon/dySave.svg';
class DyManuallySave extends Plugin {
    // private editor: any;
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('DySave', locale => {
            const view = new ButtonView(locale);
            editor.sourceElement.nextElementSibling.setAttribute("id", 'dymanuallysave');
            document.body.setAttribute("id", "dymanuallysave");
            view.set({
                label: 'dyManuallySave',
                icon: DyIconSave,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            // view.on('execute', () => {
            //     save();
            // });

            return view;
        });
    }
}
export default DyManuallySave;
