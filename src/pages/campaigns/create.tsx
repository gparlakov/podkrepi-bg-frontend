import { GetServerSideProps } from 'next'
import CampaignCreateForm from 'components/campaigns/create-form/CampaignCreateForm'
import { securedPropsWithTranslation } from 'middleware/auth/securedProps'
import { routes } from 'common/routes'

export const getServerSideProps: GetServerSideProps = securedPropsWithTranslation(
  ['common', 'auth', 'validation', 'campaigns'],
  routes.campaigns.create,
)

export default CampaignCreateForm
