import * as Yup from 'yup';

export const OrphanagesValidators = {
  store: {
    body: Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required(),
      instructions: Yup.string().required(),
      openingHours: Yup.string().required(),
      openOnWeekends: Yup.number().min(0).max(1).required()
    })
  },

  show: {
    params: Yup.object().shape({
      id: Yup.number().min(0)
    })
  }
};
