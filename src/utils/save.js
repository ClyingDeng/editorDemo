import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
class SaveFile extends Plugin {
    // private editor: any;
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('saveDyFile', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'saveDyFile',
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                const imageURL = prompt('Image URL');
            });

            return view;
        });
    }
}
export default SaveFile;
