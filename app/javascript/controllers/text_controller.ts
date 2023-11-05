import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="text"
export default class TextController extends Controller {
  static targets = ["elementWithText"]
  elementWithTextTarget: HTMLElement

  static values = {
    status: Boolean,
    on: { type: String, default: "On" },
    off: { type: String, default: "Off" },
  }
  offValue: string
  onValue: string
  statusValue: boolean

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateText()
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }

  newText(): string {
    return this.statusValue ? this.onValue : this.offValue;
  }
}
