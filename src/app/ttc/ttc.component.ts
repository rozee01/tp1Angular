import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css'
})
export class TTCComponent {
  quantity=signal(1);
  unitPrice=signal(0) ;
  tva=signal(18);

  unitPricettc: Signal<number> = computed(()=>{
    return this.unitPrice()*(1+ this.tva()/100);
  });
  totalPriceTTC: Signal<number> = computed(() => {
    let total = this.unitPricettc() * this.quantity();
    return total*this.coef();
  });
  
  coef: Signal<number>= computed(()=> {
    if (this.quantity() > 15) {
      return 0.70; // 30% remise
    } else if (this.quantity() > 10) {
      return 0.80; // 20% de remise
    }
    return 1; // Pas de remise
  });
}
