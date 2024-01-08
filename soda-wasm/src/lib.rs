use wasm_bindgen::prelude::*;
use soda_sol::*;
use bincode::deserialize;
use gloo_utils::format::JsValueSerdeExt;
use serde_json_wasm::from_str;

static DEFAULT_TEMPLATE: &'static [u8] = include_bytes!("anchor.soda");
static FLUTTER_TEMPLATE: &'static [u8] = include_bytes!("flutter.soda");
static REACT_NATIVE_TEMPLATE: &'static [u8] = include_bytes!("react_native.soda");
static SEAHORSE_TEMPLATE: &'static [u8] = include_bytes!("seahorse.soda");
static NEXTJS_TEMPLATE: &'static [u8] = include_bytes!("nextjs.soda");
static TEMPLATES_LIST: &'static [&[u8]; 5] = &[DEFAULT_TEMPLATE, FLUTTER_TEMPLATE, REACT_NATIVE_TEMPLATE, SEAHORSE_TEMPLATE, NEXTJS_TEMPLATE];
    
#[wasm_bindgen]
pub fn get_templates() -> JsValue {
    let templates: Vec<TemplateMetadata> = TEMPLATES_LIST.map(|template|deserialize::<Template>(&template).unwrap().metadata).to_vec();
    JsValue::from_serde(&templates).unwrap()
}

#[wasm_bindgen]
pub fn get_project_files(template_id: usize, idl_string: String) -> JsValue {
    let idl: IDL = from_str(&idl_string).unwrap();
    let template = deserialize::<Template>(&TEMPLATES_LIST[template_id]).unwrap();
    let files = generate_project(template, &idl);
    JsValue::from_serde(&files).unwrap()
}
