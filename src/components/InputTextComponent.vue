<template>
  <div class="form-floating">
    <input
      :type="typeInput"
      v-model="name"
      class="form-control"
      id="floatingName"
      :placeholder="placeholder"
      v-if="!isTextarea" />
    <textarea
      v-model="name"
      class="form-control"
      id="floatingName"
      :placeholder="placeholder"
      style="height: 100px"
      v-else></textarea>
    <label for="floatingName">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    props: {
      type: String, // CONVENTION: content_heading => this.$store.state['user'].content.heading,
      label: String,
      typeInput: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: 'Please enter',
      },
      isTextarea: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      name: {
        get() {
          return this.value;
        },
        set(value) {
          const keys = this.type.split('_');
          if (keys.length === 2) {
            const [box, attribute] = keys;
            if (this.$store.state['user'][box][attribute] !== undefined) {
              this.$store.commit('user/SET_STATE', [box, attribute, value]);
            }
          }
          if (keys.length === 3) {
            const [box, attribute, index] = keys;
            if (this.$store.state['user'][box][attribute][index] !== undefined) {
              if (Array.isArray(this.$store.state['user'][box][attribute])) {
                const newArr = [...this.$store.state['user'][box][attribute]];
                newArr[index] = value;
                this.$store.commit('user/SET_STATE', [box, attribute, newArr]);
              }
            }
          }
        },
      },
    },
  };
</script>
