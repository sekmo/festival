import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  static classes = ["hidden"]
  hiddenClass: string

  static targets = ["elementToHide", "elementWithText"]
  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement

  static values = { visible: Boolean }
  visibleValue: boolean

  visibleValueChanged(): void {
    this.updateHiddenClass()
    this.updateText()
  }

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.visibleValue = !this.visibleValue
  }

  updateHiddenClass(): void {
    // Assign the class if visible is false
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  newText(): string {
    return this.visibleValue ? 'Hide' : 'Show';
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }
}
