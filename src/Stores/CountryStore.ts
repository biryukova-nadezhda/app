import { makeAutoObservable, runInAction } from 'mobx'

interface ICountry {

}

class CountryStore {
  countryList: ICountry[] = []

  constructor () {
    makeAutoObservable(this);
  }

}

export default CountryStore