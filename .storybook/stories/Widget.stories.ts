import { storiesOf } from '@storybook/vue'
import Widget from '../../components/Widget.vue'

storiesOf('Widget', module)
  .add('Loads', () => ({
    components: { Widget },
    template: '<Widget />'
  }))
