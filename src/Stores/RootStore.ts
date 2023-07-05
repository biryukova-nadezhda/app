import CountryStore from './CountryStore'

class RootStore {
  countryStore = new CountryStore()
  cityStore = new CountryStore()
}

export default RootStore