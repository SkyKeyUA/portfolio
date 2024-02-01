/** @format */

import React from 'react';
import styles from './Catalog.module.scss';

import { useAppDispatch } from '@hooks/redux';
import { useFilterSelector } from '@redux/reducers/filter/selectors';
import { setCategoryId } from '@redux/reducers/filter/reducer';
import { categories } from './Catalog.constants';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const { categoryId } = useFilterSelector();
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            {categories.map(({ id, menuCatalog }) => (
              <li
                onClick={() => onClickCatalog(id)}
                key={id}
                className={`${styles.item} ${categoryId === id ? `${styles.item_open}` : ''}`}>
                {menuCatalog}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
