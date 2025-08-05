import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  },
  isSubmitting: false,
  submitSuccess: false
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitSuccess: (state, action) => {
      state.submitSuccess = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.submitSuccess = false;
    }
  }
});

export const { updateFormData, setSubmitting, setSubmitSuccess, resetForm } = contactSlice.actions;
export default contactSlice.reducer;