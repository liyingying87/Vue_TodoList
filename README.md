其中主要是这三个组件，添加事件组件和事件列表组件，我将数据放在了父组件Appvue中，以供子组件访问。子组件AddTodovue需要向父组件中添加事项，但是只有父组件中的函数能够对数据进行操作，所以再AddTodovue中，表单提交函数将用户输入的一行数据todo以vm.$emit( eventName, […args] ）函数的方式返回给Appvue组件中的add-todo
绑定的函数，这个函数正是要给全局数据列表中追加数据的函数。Todovue子组件负责显示数据，并进行删除操作，删除按钮以vm.$emit( eventName, […args] ）函数的方式将当前显示的数据的id返回给Appvue组件中的delete-todo绑定的函数。Todovue子组件中还有一个对已完成数据划线的操作，是通过组件监听 v-bind:class="{'is-complete': todo.completed}"数据中是否完成这一项的true or false来执行的。

# hello_world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
