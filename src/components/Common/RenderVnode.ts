import { defineComponent } from "vue";
const RenderNode = defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      required: true,
    },
  },
  setup(props) {
    return () => props.vNode;
  },
});

export default RenderNode;
