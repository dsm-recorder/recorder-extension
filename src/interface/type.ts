import { SetStateAction } from 'react';

export type prType = 'NEW_FEATURE' | 'BUG_FIX' | 'REFACTORING';

export interface PostPrRecordRequst {
  title: string;
  content: string;
  solution: string | null;
  type: prType;
  importance: number;
}

export interface GetPrRecrdState {
  prRecord: PostPrRecordRequst;
  setPrRecord: React.Dispatch<SetStateAction<PostPrRecordRequst>>;
  onChangePrRecord: (e: InputType) => void;
}

export type InputType =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | React.MouseEvent<HTMLInputElement, MouseEvent>;
