import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Inspector de elementos',
    Svg: require('@site/static/img/features_01.svg').default,
    description: (
      <>
        Aprendé a inspeccionar el HTML y CSS de cualquier página web
        para analizar su estructura y estilo.
      </>
    ),
    link: '/docs/inspector/intro',
    blocked: false,
  },
  {
    title: 'Gestor de contraseñas',
    Svg: require('@site/static/img/features_02.svg').default,
    description: (
      <>
        Descubre cómo usar un gestor de contraseñas de forma segura y
        práctica para proteger tus cuentas.
      </>
    ),
    link: '/docs/password-manager',
    blocked: true,
  },
  {
    title: 'Docusaurus',
    Svg: require('@site/static/img/features_03.svg').default,
    description: (
      <>
        Conocé Docusaurus, la herramienta de documentación moderna de
        código abierto que estás utilizando.
      </>
    ),
    link: '/docs/docusaurus',
    blocked: true,
  },
];

function Feature({ Svg, title, description, link, blocked }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.card, 'shadow--md', 'margin-bottom--lg')}>
        <div className='text--center'>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="card__body">
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>

        {blocked && (
          <div className={styles.blockedOverlay}>
            <span className={styles.blockedText}>En desarrollo</span>
          </div>
          
        )}

        <div className="card__footer text--center">
          <Link className="button button--primary button--sm" to={link}>
            Ver más →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
