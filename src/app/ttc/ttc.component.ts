import { Component } from '@angular/core';

@Component({
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css'
})
export class TTCComponent {
  quantity: number = 1;
  unitPrice: number = 0;
  tva: number = 18;
  get priceHT(): number {
    return this.quantity * this.unitPrice;
  }
  get coef(): number {
    if (this.quantity > 15) {
      return 0.70; // 30% remise
    } else if (this.quantity > 10) {
      return 0.80; // 20% de remise
    }
    return 1; // Pas de remise
  }
  get priceTTC(): number {
    const priceAfterDiscount = this.priceHT * this.coef;
    return priceAfterDiscount * (1 + this.tva / 100); // Appliquer la TVA
  }
}
