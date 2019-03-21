import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Details, DETAILS_PAGE} from '@appComponents/site-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  public data: Details;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.data = DETAILS_PAGE.filter(item => item.route === this.id)[0];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
