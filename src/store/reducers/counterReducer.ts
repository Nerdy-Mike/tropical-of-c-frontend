import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment, incrementByAmount } from '@/src/store/actions/counter';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});
