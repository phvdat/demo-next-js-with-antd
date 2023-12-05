# Ant Design

## Grid

- Col must inside Row
- gap: 24 (responsive: xs, sm, md, lg, xl, xxl)
- pull and push: change collumn order (inset-inline-end)
- justify: start, center, end, space-between, space-around, space-evenly
- align: top, middle, bottom
- flex, grap
- order: using to sort collumn
- gutter (~ using padding collumn): value or object (for responsive)
- offset: shifted to the right
- responsive: span, pull, push, offset, order (ex: xs={{span: 6}})

## Breckpoint (>=)

- xs: 480px,
- sm: 576px,
- md: 768px,
- lg: 992px,
- xl: 1200px,
- xxl: 1600px,
  custom breakpoint: not yet found

## Form

- watch từng field
- onFinish
- onFinishFailed
- validateTrigger
- validate Debounce
- useForm: getFieldError, getFieldsError, getFieldValue, getFieldsValue, setFieldValue, setFieldsValue, isFieldsTouched
- form.setFields([ {
  name: 'field-to-update',
  errors: ['error-string'],
  },]);
  support ts kém

## Customize theme

less and CSS variables of the 4.x => css in js

Seed Token:Some tokens will affect other tokens. We call these tokens Seed Token.
Định nghĩa một số thuộc tính cho màu chủ đề chính (colorPrimary) và bán kính viền (borderRadius). Seed Token (Token Gốc hoặc Mã Gốc):

Alias Token: Định nghĩa màu nền cho một container (colorBgContainer).

Các chủ đề với các phong cách khác nhau có thể được tạo nhanh chóng bằng cách sửa đổi algorithm.
3 theme provides:

- default algorithm theme.defaultAlgorithm
- dark algorithm theme.darkAlgorithm
- compact algorithm theme.compactAlgorithm

## antd/cssinjs

@ant-design/css-in-js không phải là một thư viện CSS-in-JS riêng lẻ, nó là một phần của Ant Design. dùng emotion nếu muốn style theo cssinjs

- useServerInsertedHTML từ "next/navigation": Có vẻ như đây là một phương thức được sử dụng trong Next.js để xử lý việc chèn HTML từ server.
- Sử dụng useMemo để tạo một cache để lưu trữ các style.
- Sử dụng useRef để theo dõi việc đã chèn HTML từ server hay chưa, từ đó tránh chèn trùng lặp.
- createCache(): Phương thức này tạo một cache để lưu trữ các style.
- hashPriority="high": remove':where'(dùng để giảm độ ưu tiên)> kém trên các trình duyệt cũ hoặc xung đột ưu tiên như tailwind): vô hiệu hóa việc giảm độ ưu tiên mặc định -legacyLogicalPropertiesTransformer: cần tương thích với các trình duyệt cũ hơn (the original margin-left is replaced by margin-inline-start) - px2remTransformer: chuyển đổi pixel qua rem

## Emotion

@emotion/styled

- @emotion/styled lấy cảm hứng nhiều từ styled-components
- component style thiên về cú pháp tạo kiểu giống CSS truyền thống hơn.
- có thể truyền props
- Styling any component: có thể tạo kiểu cho bất kỳ thành phần nào miễn là nó chấp nhận prop className.
- Change the rendered tag using withComponent: tái sử dụng kiểu với component khác
- Targeting another emotion component
- Customizing prop forwarding: to prevent styling props được truyền xuống và tạo thuộc tính invalid:
  const H1 = styled('h1', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color'
  })(props => ({
  color: props.color
  }))
- as prop: dùng để styles từ 1 styled component nhưng thay đổi element rendered
  <Button as="a" href="https://github.com/emotion-js/emotion">
  Emotion on GitHub
  </Button>
- Nesting components: nest selectors using &:
