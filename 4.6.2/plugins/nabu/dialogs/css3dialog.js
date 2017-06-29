CKEDITOR.dialog.add('CSS3Dialog', function(editor) {
    return {
        title: 'Editor CSS3',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'CSS3',
                elements: [
                    {
                        type: 'text',
                        id: 'class',
                        label: 'Clase CSS',
                        setup: function(element) {
                            this.setValue(element.getAttribute('class'));
                        },
                        commit: function(element) {
                            var klass = this.getValue();
                            if (klass) {
                                element.setAttribute('class', klass);
                            } else {
                                element.removeAttribute('class');
                            }
                        }
                    },
                    {
                        type: 'text',
                        id: 'style',
                        label: 'Estilo',
                        setup: function(element) {
                            this.setValue(element.getAttribute('style'));
                        },
                        commit: function(element) {
                            var style = this.getValue();
                            if (style) {
                                element.setAttribute('style', style);
                            } else {
                                element.removeAttribute('style');
                            }
                        }
                    }
                ]
            },
            {
                id: 'tab-adv',
                label: 'CSS3 Avanzado',
                elements: [
                    {
                        type: 'text',
                        id: 'id',
                        label: 'Id',
                        setup: function(element) {
                            this.setValue(element.getAttribute('id'));
                        },
                        commit: function(element) {
                            var id = this.getValue();
                            if (id) {
                                element.setAttribute('id', id);
                            } else {
                                element.removeAttribute('id');
                            }
                        }
                    }
                ]
            }
        ],

        onShow: function() {
            var selection = editor.getSelection();
            this.element = selection.getStartElement();
            this.setupContent(this.element);
        },

        onOk: function() {
            var dialog = this;
            var element = dialog.element;

            dialog.commitContent(element);
        }
    };
});
