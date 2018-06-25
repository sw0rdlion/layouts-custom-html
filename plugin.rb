# name: layouts-custom-html
# about: A custom html widget for use with Discourse Layouts
# version: 0.1
# authors: Angus McLeod

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('html', position: 'right', order: '1')
end

after_initialize do
  add_to_serializer(:basic_category, :layouts_html) { object.custom_fields['layouts_html'] }
end
