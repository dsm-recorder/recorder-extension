import { prType } from '@/interface/type';

export const DropdownMenu: prType[] = ['NEW_FEATURE', 'BUG_FIX', 'REFACTORING'];

export const PrTypeGenerator: Record<prType, string> = {
  NEW_FEATURE: '기능추가',
  BUG_FIX: '버그수정',
  REFACTORING: '리팩토링',
};
