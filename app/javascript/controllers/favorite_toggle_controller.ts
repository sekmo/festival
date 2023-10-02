import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  toggle(): void {
    console.log("The button was clicked");
  }
}
