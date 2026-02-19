<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <jl-button>top-start</jl-button>
      </jl-tooltip>
      <jl-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <jl-button>top</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <jl-button>top-end</jl-button>
      </jl-tooltip>
    </div>
    <div class="row">
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <jl-button>left-start</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <jl-button>right-start</jl-button>
      </jl-tooltip>
    </div>
    <div class="row">
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <jl-button class="mt-3 mb-3">left</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <jl-button>right</jl-button>
      </jl-tooltip>
    </div>
    <div class="row">
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <jl-button>left-end</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <jl-button>right-end</jl-button>
      </jl-tooltip>
    </div>
    <div class="row center">
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <jl-button>bottom-start</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <jl-button>bottom</jl-button>
      </jl-tooltip>
      <jl-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <jl-button>bottom-end</jl-button>
      </jl-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import JlTooltip from "@/components/Tooltip/Tooltip.vue";
import JlButton from "@/components/Button/Button.vue";

defineOptions({
  name: "BasicTooltipDemo",
});
</script>

<style scoped>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
