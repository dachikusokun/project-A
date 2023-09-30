<script lang="ts" setup>
import { useField } from 'vee-validate';
import { email, required } from '@vee-validate/rules';
// const props = defineProps({
//   titel: String,
// })
const { value: isemail, errorMessage: emailError } = useField("Email", [email,required])

</script>
<template>
  <v-container>
    <v-row>
      <!-- <v-card
        class="mx-auto pa-16"
        width="600px"
        style="background-color: aqua:  !important;"
      > -->
        <v-form class="mx-auto" style="width:600px;">
          <v-col class="pa-0">
            <!-- <h2 align="center">{{ props.titel }}</h2> -->
            <v-text-field
              class="my-10"
              label="Email"
              type="email"
              variant="outlined"
              rows="1"
              row-height="15"
              v-model="isemail"
              :error-messages="emailError"
            ></v-text-field>
            <v-text-field
              class="my-10"
              label="Password"
              type="password"
              variant="outlined"
              rows="1"
              row-height="15"
            ></v-text-field>
            <!-- <v-btn color="orange" block>Sign in</v-btn> -->
          </v-col>
        </v-form>
      <!-- </v-card> -->
    </v-row>
  </v-container>
</template>
