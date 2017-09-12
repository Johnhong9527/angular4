/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy } from '../change_detection/constants';
import { Provider } from '../di';
import { Type } from '../type';
import { TypeDecorator } from '../util/decorators';
import { ViewEncapsulation } from './view';
/**
 * 指令装饰器/构造函数的类型。
 *
 * @stable
 */
export interface DirectiveDecorator {
  /**
   * @它能做什么 将类标记为Angular指令，并收集指令配置
   * 元数据.
   *
   * @如何使用
   *
   * ```
   * import {Directive} from '@angular/core';
   *
   * @Directive({
     *   selector: 'my-directive',
     * })
   * export class MyDirective {
     * }
   * ```
   *
   * @描述
   *
   *指令装饰器允许您将类标记为Angular指令，并提供其他元数据，以确定如何在运行时处理，实例化和使用伪指令。
   *
   * 指令允许您将行为附加到DOM中的元素
   *
   * 一个指令必须属于一个NgModule，以便它被另一个指令，组件或应用程序使用。 要指定一个指令是NgModule的成员，
   * 您应该将其列在该NgModule的“声明”字段中。
   *
   * 除了通过指令装饰器指定的元数据配置之外,
   * 指令可以通过实现各种生命周期钩子来控制其运行时行为.
   *
   * **元数据属性:**
   *
   * * **exportAs** - 组件实例在模板中导出的名称
   * * **host** - 类属性映射到事件，属性和属性的主机元素绑定
   * * **inputs** - 将类属性名称列表作为组件输入的数据绑定
   * * **outputs** - 列出其他可以订阅的输出事件的类属性名称
   * * **providers** - 该组件及其子组件可用的提供程序列表
   * * **queries** -  配置可以注入组件的查询
   * * **selector** - css选择器，用于标识模板中的此组件
   *
   * @稳定
   * @注解
   */
  (obj: Directive): TypeDecorator;
  /**
   * 请参阅{@link指令}装饰器。
   */
  new (obj: Directive): Directive;
}
export interface Directive {
  /**
   * 触发实例化指令的CSS选择器。
   *
   * Angular仅允许指令触发不跨越元素边界的CSS选择器。
   *
   * `selector` 可以被声明为以下之一:
   *
   * - `element-name`: 按元素名称选择.
   * - `.class`: 按类名选择.
   * - `[attribute]`: 按属性名称选择.
   * - `[attribute=value]`: 按属性名称和值选择.
   * - `:not(sub_selector)`: 只有当元素不匹配`sub_selector`时才选择.
   * - `selector1, selector2`: 选择“selector1”或“selector2”是否匹配.
   *
   *
   * ### 例
   *
   * 假设我们有一个`input [type = text]选择器的指令。
   *
   * 和以下HTML:
   *
   * ```html
   * <form>
   *   <input type="text">
   *   <input type="radio">
   * <form>
   * ```
   *
   * 该指令只能在`<input type =“text”>“元素上实例化.
   *
   */
  selector?: string;
  /**
   * 枚举一个指令的数据绑定输入属性集
   *
   * Angular在更改检测期间自动更新输入属性.
   *
   * `inputs`属性将一组`directiveProperty`定义为`bindingProperty`
   组态:
   *
   * - `directiveProperty`指定写入值的组件属性.
   * - `bindingProperty`指定读取值的DOM属性.
   *
   * 当没有提供`bindingProperty`时，它被假定为等于`directiveProperty`.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/ivhfXY?p=preview））
   *
   * 以下示例创建具有两个数据绑定属性的组件.
   *
   * ```typescript
   * @Component({
     *   selector: 'bank-account',
     *   inputs: ['bankName', 'id: account-id'],
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
   * class BankAccount {
     *   bankName: string;
     *   id: string;
     *
     *   // 此属性未绑定，不会被Angular自动更新
     *   normalizedBankName: string;
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `
     * })
   * class App {}
   * ```
   *
   */
  inputs?: string[];
  /**
   * 枚举一组事件绑定的输出属性。
   *
   * 当输出属性发出一个事件时，附加到该事件的事件处理程序调用该模板。
   *
   * `outputs`属性将一组`directiveProperty`定义为`bindingProperty`配置:
   *
   * - `directiveProperty`指定发出事件的组件属性.
   * - `bindingProperty`指定事件处理程序所附加的DOM属性.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/d5CNq7?p=preview））
   *
   * ```typescript
   * @Directive({
     *   selector: 'interval-dir',
     *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
     * })
   * class IntervalDir {
     *   everySecond = new EventEmitter();
     *   five5Secs = new EventEmitter();
     *
     *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `
     * })
   * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
   * ```
   *
   */
  outputs?: string[];
  /**
   * 指定与主机元素相关的事件，操作，属性和属性.
   *
   * ## 主机监听器
   *
   * 通过一组`（event）`指向`method`来指定一个指令侦听哪个DOM事件
   * 键值对:
   *
   * - `event`: 指令监听的DOM事件.
   * - `statement`: 发生事件时执行的语句.
   * 如果该语句的评估返回`false`，那么`preventDefault`应用于DOM事件
   *
   * 要侦听全局事件，必须将事件名称添加到目标.
   * 目标可以是“window”，“document”或“body”.
   *
   * 编写指令事件绑定时，还可以参考$ event局部变量.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/DlA5KU?p=preview））
   *
   * 以下示例声明将点击监听器附加到按钮并计数点击的指令.
   *
   * ```typescript
   * @Directive({
     *   selector: 'button[counting]',
     *   host: {
     *     '(click)': 'onClick($event.target)'
     *   }
     * })
   * class CountClicks {
     *   numberOfClicks = 0;
     *
     *   onClick(btn) {
     *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
     *   }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<button counting>Increment</button>`
     * })
   * class App {}
   * ```
   *
   * ## 主机属性绑定
   *
   * 指定指令更新的DOM属性。
   *
   * 在更改检测期间，Angular会自动检查主机属性绑定.
   * 如果绑定更改，它将更新指令的主机元素.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/gNg0ED?p=preview））
   *
   * 以下示例创建了一个在DOM元素上设置“valid”和“invalid”类的指令，该元素具有ngModel伪指令.
   *
   * ```typescript
   * @Directive({
     *   selector: '[ngModel]',
     *   host: {
     *     '[class.valid]': 'valid',
     *     '[class.invalid]': 'invalid'
     *   }
     * })
   * class NgModelStatus {
     *   constructor(public control:NgModel) {}
     *   get valid { return this.control.valid; }
     *   get invalid { return this.control.invalid; }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`
     * })
   * class App {
     *   prop;
     * }
   * ```
   *
   * ## 属性
   *
   * 指定应传播到主机元素的静态属性.
   *
   * ### 例
   *
   * In this example using `my-button` directive (ex.: `<div my-button></div>`) on a host element
   * (here: `<div>` ) will ensure that this element will get the "button" role.
   *
   * ```typescript
   * @Directive({
     *   selector: '[my-button]',
     *   host: {
     *     'role': 'button'
     *   }
     * })
   * class MyButton {
     * }
   * ```
   */
  host?: {
    [key: string]: string;
  };
  /**
   * Defines the set of injectable objects that are visible to a Directive and its light DOM
   * children.
   *
   * ## Simple Example
   *
   * Here is an example of a class that can be injected:
   *
   * ```
   * class Greeter {
     *    greet(name:string) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
   *
   * @Directive({
     *   selector: 'greet',
     *   providers: [
     *     Greeter
     *   ]
     * })
   * class HelloWorld {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
   * ```
   */
  providers?: Provider[];
  /**
   * Defines the name that can be used in the template to assign this directive to a variable.
   *
   * ## Simple Example
   *
   * ```
   * @Directive({
     *   selector: 'child-dir',
     *   exportAs: 'child'
     * })
   * class ChildDir {
     * }
   *
   * @Component({
     *   selector: 'main',
     *   template: `<child-dir #c="child"></child-dir>`
     * })
   * class MainComponent {
     * }
   *
   * ```
   */
  exportAs?: string;
  /**
   * Configures the queries that will be injected into the directive.
   *
   * Content queries are set before the `ngAfterContentInit` callback is called.
   * View queries are set before the `ngAfterViewInit` callback is called.
   *
   * ### Example
   *
   * ```
   * @Component({
     *   selector: 'someDir',
     *   queries: {
     *     contentChildren: new ContentChildren(ChildDirective),
     *     viewChildren: new ViewChildren(ChildDirective)
     *   },
     *   template: '<child-directive></child-directive>'
     * })
   * class SomeDir {
     *   contentChildren: QueryList<ChildDirective>,
     *   viewChildren: QueryList<ChildDirective>
     *
     *   ngAfterContentInit() {
     *     // contentChildren is set
     *   }
     *
     *   ngAfterViewInit() {
     *     // viewChildren is set
     *   }
     * }
   * ```
   */
  queries?: {
    [key: string]: any;
  };
}
/**
 * Directive decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const Directive: DirectiveDecorator;
/**
 * Type of the Component decorator / constructor function.
 *
 * @stable
 */
export interface ComponentDecorator {
  /**
   * @whatItDoes Marks a class as an Angular component and collects component configuration
   * metadata.
   *
   * @howToUse
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   *
   * @description
   * Component decorator allows you to mark a class as an Angular component and provide additional
   * metadata that determines how the component should be processed, instantiated and used at
   * runtime.
   *
   * Components are the most basic building block of an UI in an Angular application.
   * An Angular application is a tree of Angular components.
   * Angular components are a subset of directives. Unlike directives, components always have
   * a template and only one component can be instantiated per an element in a template.
   *
   * A component must belong to an NgModule in order for it to be usable
   * by another component or application. To specify that a component is a member of an NgModule,
   * you should list it in the `declarations` field of that NgModule.
   *
   * In addition to the metadata configuration specified via the Component decorator,
   * components can control their runtime behavior by implementing various Life-Cycle hooks.
   *
   * **Metadata Properties:**
   *
   * * **animations** - list of animations of this component
   * * **changeDetection** - change detection strategy used by this component
   * * **encapsulation** - style encapsulation strategy used by this component
   * * **entryComponents** - list of components that are dynamically inserted into the view of this
   *   component
   * * **exportAs** - name under which the component instance is exported in a template
   * * **host** - map of class property to host element bindings for events, properties and
   *   attributes
   * * **inputs** - list of class property names to data-bind as component inputs
   * * **interpolation** - custom interpolation markers used in this component's template
   * * **moduleId** - ES/CommonJS module id of the file in which this component is defined
   * * **outputs** - list of class property names that expose output events that others can
   *   subscribe to
   * * **providers** - list of providers available to this component and its children
   * * **queries** -  configure queries that can be injected into the component
   * * **selector** - css selector that identifies this component in a template
   * * **styleUrls** - list of urls to stylesheets to be applied to this component's view
   * * **styles** - inline-defined styles to be applied to this component's view
   * * **template** - inline-defined template for the view
   * * **templateUrl** - url to an external file containing a template for the view
   * * **viewProviders** - list of providers available to this component and its view children
   *
   * ### Example
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   *
   * @stable
   * @Annotation
   */
  (obj: Component): TypeDecorator;
  /**
   * See the {@link Component} decorator.
   */
  new (obj: Component): Component;
}
/**
 * Type of the Component metadata.
 *
 * @stable
 */
export interface Component extends Directive {
  /**
   * Defines the used change detection strategy.
   *
   * When a component is instantiated, Angular creates a change detector, which is responsible for
   * propagating the component's bindings.
   *
   * The `changeDetection` property defines, whether the change detection will be checked every time
   * or only when the component tells it to do so.
   */
  changeDetection?: ChangeDetectionStrategy;
  /**
   * Defines the set of injectable objects that are visible to its view DOM children.
   *
   * ## Simple Example
   *
   * Here is an example of a class that can be injected:
   *
   * ```
   * class Greeter {
     *    greet(name:string) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
   *
   * @Directive({
     *   selector: 'needs-greeter'
     * })
   * class NeedsGreeter {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
   *
   * @Component({
     *   selector: 'greet',
     *   viewProviders: [
     *     Greeter
     *   ],
     *   template: `<needs-greeter></needs-greeter>`
     * })
   * class HelloWorld {
     * }
   *
   * ```
   */
  viewProviders?: Provider[];
  /**
   * The module id of the module that contains the component.
   * Needed to be able to resolve relative urls for templates and styles.
   * In CommonJS, this can always be set to `module.id`, similarly SystemJS exposes `__moduleName`
   * variable within each module.
   *
   *
   * ## Simple Example
   *
   * ```
   * @Directive({
     *   selector: 'someDir',
     *   moduleId: module.id
     * })
   * class SomeDir {
     * }
   *
   * ```
   */
  moduleId?: string;
  /**
   * Specifies a template URL for an Angular component.
   *
   *Only one of `templateUrl` or `template` can be defined per View.
   */
  templateUrl?: string;
  /**
   * Specifies an inline template for an Angular component.
   *
   * Only one of `templateUrl` or `template` can be defined per Component.
   */
  template?: string;
  /**
   * Specifies stylesheet URLs for an Angular component.
   */
  styleUrls?: string[];
  /**
   * Specifies inline stylesheets for an Angular component.
   */
  styles?: string[];
  /**
   * Animations are defined on components via an animation-like DSL. This DSL approach to describing
   * animations allows for a flexibility that both benefits developers and the framework.
   *
   * Animations work by listening on state changes that occur on an element within
   * the template. When a state change occurs, Angular can then take advantage and animate the
   * arc in between. This works similar to how CSS transitions work, however, by having a
   * programmatic DSL, animations are not limited to environments that are DOM-specific.
   * (Angular can also perform optimizations behind the scenes to make animations more performant.)
   *
   * For animations to be available for use, animation state changes are placed within
   * {@link trigger animation triggers} which are housed inside of the `animations` annotation
   * metadata. Within a trigger both {@link state state} and {@link transition transition} entries
   * can be placed.
   *
   * ```typescript
   * @Component({
     *   selector: 'animation-cmp',
     *   templateUrl: 'animation-cmp.html',
     *   animations: [
     *     // this here is our animation trigger that
     *     // will contain our state change animations.
     *     trigger('myTriggerName', [
     *       // the styles defined for the `on` and `off`
     *       // states declared below are persisted on the
     *       // element once the animation completes.
     *       state('on', style({ opacity: 1 }),
     *       state('off', style({ opacity: 0 }),
     *
     *       // this here is our animation that kicks off when
     *       // this state change jump is true
     *       transition('on => off', [
     *         animate("1s")
     *       ])
     *     ])
     *   ]
     * })
   * ```
   *
   * As depicted in the code above, a group of related animation states are all contained within
   * an animation `trigger` (the code example above called the trigger `myTriggerName`).
   * When a trigger is created then it can be bound onto an element within the component's
   * template via a property prefixed by an `@` symbol followed by trigger name and an expression
   * that
   * is used to determine the state value for that trigger.
   *
   * ```html
   * <!-- animation-cmp.html -->
   * <div @myTriggerName="expression">...</div>
   * ```
   *
   * For state changes to be executed, the `expression` value must change value from its existing
   * value
   * to something that we have set an animation to animate on (in the example above we are listening
   * to a change of state between `on` and `off`). The `expression` value attached to the trigger
   * must be something that can be evaluated with the template/component context.
   *
   * ### DSL Animation Functions
   *
   * Please visit each of the animation DSL functions listed below to gain a better understanding
   * of how and why they are used for crafting animations in Angular:
   *
   * - {@link trigger trigger()}
   * - {@link state state()}
   * - {@link transition transition()}
   * - {@link group group()}
   * - {@link sequence sequence()}
   * - {@link style style()}
   * - {@link animate animate()}
   * - {@link keyframes keyframes()}
   */
  animations?: any[];
  /**
   * Specifies how the template and the styles should be encapsulated:
   * - {@link ViewEncapsulation#Native `ViewEncapsulation.Native`} to use shadow roots - only works
   *   if natively available on the platform,
   * - {@link ViewEncapsulation#Emulated `ViewEncapsulation.Emulated`} to use shimmed CSS that
   *   emulates the native behavior,
   * - {@link ViewEncapsulation#None `ViewEncapsulation.None`} to use global CSS without any
   *   encapsulation.
   *
   * When no `encapsulation` is defined for the component, the default value from the
   * {@link CompilerOptions} is used. The default is `ViewEncapsulation.Emulated`}. Provide a new
   * `CompilerOptions` to override this value.
   *
   * If the encapsulation is set to `ViewEncapsulation.Emulated` and the component has no `styles`
   * nor `styleUrls` the encapsulation will automatically be switched to `ViewEncapsulation.None`.
   */
  encapsulation?: ViewEncapsulation;
  /**
   * Overrides the default encapsulation start and end delimiters (respectively `{{` and `}}`)
   */
  interpolation?: [string, string];
  /**
   * Defines the components that should be compiled as well when
   * this component is defined. For each components listed here,
   * Angular will create a {@link ComponentFactory} and store it in the
   * {@link ComponentFactoryResolver}.
   */
  entryComponents?: Array<Type<any> | any[]>;
}
/**
 * Component decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const Component: ComponentDecorator;
/**
 * Type of the Pipe decorator / constructor function.
 *
 * @stable
 */
export interface PipeDecorator {
  /**
   * Declare reusable pipe function.
   *
   * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
   *
   * When not specified, pipes default to being pure.
   */
  (obj: Pipe): TypeDecorator;
  /**
   * See the {@link Pipe} decorator.
   */
  new (obj: Pipe): Pipe;
}
/**
 * Type of the Pipe metadata.
 *
 * @stable
 */
export interface Pipe {
  name: string;
  pure?: boolean;
}
/**
 * Pipe decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const Pipe: PipeDecorator;
/**
 * Type of the Input decorator / constructor function.
 *
 * @stable
 */
export interface InputDecorator {
  /**
   * Declares a data-bound input property.
   *
   * Angular automatically updates data-bound properties during change detection.
   *
   * `Input` takes an optional parameter that specifies the name
   * used when instantiating a component in the template. When not provided,
   * the name of the decorated property is used.
   *
   * ### Example
   *
   * The following example creates a component with two input properties.
   *
   * ```typescript
   * @Component({
     *   selector: 'bank-account',
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
   * class BankAccount {
   *   @Input() bankName: string;
   *   @Input('account-id') id: string;
   *
   *   // this property is not bound, and won't be automatically updated by Angular
   *   normalizedBankName: string;
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `
     * })
   *
   * class App {}
   * ```
   * @stable
   */
  (bindingPropertyName?: string): any;
  new (bindingPropertyName?: string): any;
}
/**
 * Type of the Input metadata.
 *
 * @stable
 */
export interface Input {
  /**
   * Name used when instantiating a component in the template.
   */
  bindingPropertyName?: string;
}
/**
 * Input decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const Input: InputDecorator;
/**
 * Type of the Output decorator / constructor function.
 *
 * @stable
 */
export interface OutputDecorator {
  /**
   * Declares an event-bound output property.
   *
   * When an output property emits an event, an event handler attached to that event
   * the template is invoked.
   *
   * `Output` takes an optional parameter that specifies the name
   * used when instantiating a component in the template. When not provided,
   * the name of the decorated property is used.
   *
   * ### Example
   *
   * ```typescript
   * @Directive({
     *   selector: 'interval-dir',
     * })
   * class IntervalDir {
   *   @Output() everySecond = new EventEmitter();
   *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
   *
   *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `
     * })
   * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
   * ```
   * @stable
   */
  (bindingPropertyName?: string): any;
  new (bindingPropertyName?: string): any;
}
/**
 * Type of the Output metadata.
 *
 * @stable
 */
export interface Output {
  bindingPropertyName?: string;
}
/**
 * Output decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const Output: OutputDecorator;
/**
 * Type of the HostBinding decorator / constructor function.
 *
 * @stable
 */
export interface HostBindingDecorator {
  /**
   * Declares a host property binding.
   *
   * Angular automatically checks host property bindings during change detection.
   * If a binding changes, it will update the host element of the directive.
   *
   * `HostBinding` takes an optional parameter that specifies the property
   * name of the host element that will be updated. When not provided,
   * the class property name is used.
   *
   * ### Example
   *
   * The following example creates a directive that sets the `valid` and `invalid` classes
   * on the DOM element that has ngModel directive on it.
   *
   * ```typescript
   * @Directive({selector: '[ngModel]'})
   * class NgModelStatus {
     *   constructor(public control:NgModel) {}
   *   @HostBinding('class.valid') get valid() { return this.control.valid; }
   *   @HostBinding('class.invalid') get invalid() { return this.control.invalid; }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`,
     * })
   * class App {
     *   prop;
     * }
   * ```
   * @stable
   */
  (hostPropertyName?: string): any;
  new (hostPropertyName?: string): any;
}
/**
 * Type of the HostBinding metadata.
 *
 * @stable
 */
export interface HostBinding {
  hostPropertyName?: string;
}
/**
 * HostBinding decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const HostBinding: HostBindingDecorator;
/**
 * Type of the HostListener decorator / constructor function.
 *
 * @stable
 */
export interface HostListenerDecorator {
  /**
   * Declares a host listener.
   *
   * Angular will invoke the decorated method when the host element emits the specified event.
   *
   * If the decorated method returns `false`, then `preventDefault` is applied on the DOM event.
   *
   * ### Example
   *
   * The following example declares a directive that attaches a click listener to the button and
   * counts clicks.
   *
   * ```typescript
   * @Directive({selector: 'button[counting]'})
   * class CountClicks {
     *   numberOfClicks = 0;
     *
   *   @HostListener('click', ['$event.target'])
   *   onClick(btn) {
     *     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
     *   }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: '<button counting>Increment</button>',
     * })
   * class App {}
   * ```
   * @stable
   * @Annotation
   */
  (eventName: string, args?: string[]): any;
  new (eventName: string, args?: string[]): any;
}
/**
 * Type of the HostListener metadata.
 *
 * @stable
 */
export interface HostListener {
  eventName?: string;
  args?: string[];
}
/**
 * HostListener decorator and metadata.
 *
 * @stable
 * @Annotation
 */
export declare const HostListener: HostListenerDecorator;
