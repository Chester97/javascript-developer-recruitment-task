import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteCities: string[];

  private readonly STORAGE_KEY = 'favs';

  constructor() {
    this.favoriteCities = this.load();
  }

  private load(): string[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) ?? '[]');
  }

  private save(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favoriteCities));
  }

  add(city: string): void {
    this.favoriteCities.push(city);
    this.save();
  }

  remove(city: string): void {
    this.favoriteCities = this.favoriteCities.filter(c => c !== city);
    this.save();
  }

  isFavorite(city: string): boolean {
    return this.favoriteCities.some(c => c === city);
  }
}
