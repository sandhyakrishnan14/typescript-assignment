function LogClass(target: Function) {
    const original = target;

    function construct(constructor: any, args: any[]) {
        const c: any = function (this: any) {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        const instance = new c();
        console.log(`Class ${constructor.name} is instantiated`);
        return instance;
    }

    const f: any = function (...args: any[]) {
        return construct(original, args);
    };

    f.prototype = original.prototype;

    return f;
}

@LogClass
class OrderService {
    constructor() {
        console.log('OrderService constructor called');
    }

    placeOrder(orderId: number) {
        console.log(`Order ${orderId} placed`);
    }
}

const orderService = new OrderService();
orderService.placeOrder(123);