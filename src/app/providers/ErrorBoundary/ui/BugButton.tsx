import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState<boolean>();
  const { t } = useTranslation();

  const _throw = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button className={classNames('', {}, [className])} onClick={_throw}>
      {t('Бросить ошибку')}
    </Button>
  );
};
