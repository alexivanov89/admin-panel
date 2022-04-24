export const getRequestParams = (params) => {
  return params?.reduce((sum, item) => {
    switch (item.name[0]) {
      case 'tank':
        if (item.value) {
          return sum + `tank${item.value}&`;
        }
        return sum + '';

      case 'city':
        if (item.value) {
          return sum + `cityId[id]=${item.value}&`;
        }
        return sum + '';

      case 'category':
        if (item.value) {
          return sum + `categoryId[id]=${item.value}&`;
        }
        return sum + '';

      case 'period':
        if (item?.value?.value) {
          return sum + `createdAt[$gt]=${item?.value?.value}&`;
        }
        return sum + '';

      case 'nameCar':
        if (item.value) {
          return sum + `name=${item.value}&`;
        }
        return sum + '';

      case 'car':
        if (item.value) {
          return sum + `carId[id]=${item.value}&`;
        }
        return sum + '';

      case 'orderStatus':
        if (item.value) {
          return sum + `orderStatusId[id]=${item.value}&`;
        }
        return sum + '';

      case 'priceMin':
        if (item.value) {
          return sum + `priceMin${item.value}&`;
        }
        return sum + '';

      case 'rateType':
        if (item.value) {
          return sum + `rateTypeId[id]=${item.value}`;
        }
        return sum + '';

      default:
        if (item.value) {
          return sum + `${item.name}=${item.value}&`;
        }
        return sum + '';
    }
  }, `?`);
};
