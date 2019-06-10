import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export const NAME = 'Example'

@Module({
  stateFactory: true,
  namespaced: true,
  name: NAME
})
export default class Example extends VuexModule {
  public static readonly NAME = NAME

  private wheels = 2

  @Mutation
  public incrWheels(extra: number) {
    this.wheels += extra
  }

  public get axles() {
    return this.wheels / 2
  }
}
