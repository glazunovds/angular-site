export interface MainPage {
  name: string;
  items: Array<MainPageItem>;
}

export interface MainPageItem {
  image: string;
  name: string;
  description: string;
}
