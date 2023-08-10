import vFocus from "./vFocus";




function directive(app: any) {
    app.directive('focus', vFocus)
}

export default directive;