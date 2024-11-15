import { Schema, model } from 'mongoose';

type Loan = {
  loanAmountWithInterest: number;
  userId: Schema.Types.ObjectId;
  dueDate: Date;
};

const loanSchema = new Schema<Loan>(
  {
    loanAmountWithInterest: {
      // Сумма кредита с процентами
      type: Number,
      required: true,
      min: 0,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Loan>('loan', loanSchema);
