import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('change/city');

