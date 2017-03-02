define(
    ['jquery', 'underscore', 'views/admin/orderActivities/editView', 'metro_ui'],
    function ($, Underscore, OrderActivityEditView) {
        "use strict";

        function OrderActivityEdit(orderActivity, title) {
            this.model = orderActivity;
            this.title = title;
        }

        OrderActivityEdit.prototype.show = function (onSave) {
            var self, content, view, dialog;
            self = this;
            view = new OrderActivityEditView({
                model: this.model,
                events: {
                    "submit form": function (event) {
                        event.preventDefault();
                        $('.btn-close').click();
                        onSave(this.model);
                    },
                    "click input[value=Cancel]": function (event) {
                        $('.btn-close').click();
                    },
                    "change input:not([type=checkbox])": function (event) {
                        var $input = $(event.target);
                        this.model.set($input.attr("name"), $input.val());
                    },
                    "change input[type=checkbox]": function (event) {
                        var checked, name, $checkbox = $(event.target);
                        name = $checkbox.attr("name");
                        checked = $checkbox.prop("checked");
                        this.model.set(name, checked);
                    }
                }
            });

            dialog = $.Dialog({
                shadow: true,
                overlay: true,
                flat: true,
                icon: '<span class="icon-cube"></span>',
                title: self.title,
                padding: 10,
                content: view.render().$el.html() // Yes it's stupid but it's the only way sizing works
            });
            content = dialog.children(".content");
            content.empty();
            content.append(view.render().$el);
            content.find("[data-role=input-control], .input-control").inputControl();
            content.find("[data-transform=input-control]").inputTransform();
        };

        return OrderActivityEdit;
    }
);
