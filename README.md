# breeze-vue-salert

This is a vue simple prompt box plug-in.

## Install

Use npm to download code:


```
npm install breeze-vue-salert --save
```

import it into your project.

```js
import Salert from 'breeze-vue-salert'
Vue.use(Salert)
```

## Usage

```js
<script>
export default {
  created () {
    this.$salert('提示文字')
    this.$salert('成功', 0)
    this.$salert('失败', 1)
    this.$salert('失败', 1, 2000) // 2秒后消失
  }
}
</script>
```

## Props
```
this.$salert(msg, type, duration)
```

|        Prop       |   Type   | Default  |             Description             |
|-------------------|----------|----------|-------------------------------------|
| msg              | String    | “未知问题”       | prompt message          |
| type             | Number   | 1      | 1 represents error, 2 represents success                |
| duration       | Number   | 1500   | how long is the prompt box show          |

## License

[MIT](https://github.com/breeze55/breeze-vue-salert/blob/master/LICENSE)
