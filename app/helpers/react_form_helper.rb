module ReactFormHelper
  def react_form_component(name, object, options = {})
    props = Jbuilder.encode do |json|
      json.object do
        json.merge! object.attributes
        json.errors object.errors.to_hash(true)
        json.modelName object.model_name.name
      end
      json.csrfToken form_authenticity_token
    end

    react_component(name, props, options)
  end
end
