export default function ElementLocator(selector: string) {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            get: function (this: any) {
                return $(selector)
            }
        });
    }
}

