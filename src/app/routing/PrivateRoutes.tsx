import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import ButtonDocumentation from '../../documentations/ButtonDocumentation'
import BadgeDocumentation from '../../documentations/BadgeDocumentation'
import BreadcrumbDocumentation from '../../documentations/BreadcrumbDocumentation'
import PaginationDocumentation from '../../documentations/PaginationDocumentation'
import CardDocumentation from '../../documentations/CardDocumentation'
import SeparatorDocumentation from '../../documentations/SeparatorDocumentation'
import TagifyDocumentation from '../../documentations/TagifyDocumentation'
import FormsDocumentation from '../../documentations/FormsDocumentation'
import FormControlDocumentation from '../../documentations/FormControlDocumentation'
import FormSelectDocumentation from '../../documentations/FormSelectDocumentation'
import CheckRadioDocumentation from '../../documentations/CheckRadioDocumentation'
import InputGroupDocumentation from '../../documentations/InputGroupDocumentation'
import FloatingLabelDocumentation from '../../documentations/FloatingLabelDocumentation'
import FormValidationDocumentation from '../../documentations/FormValidationDocumentation'
import AccordionDocumentation from '../../documentations/AccordionDocumentation'
import AlertDocumentation from '../../documentations/AlertDocumentation'
import ModalDocumentation from '../../documentations/ModalDocumentation'
import PopoverDocumentation from '../../documentations/PopoverDocumentation'
import ProgressDocumentation from '../../documentations/ProgressDocumentation'
import SpinnerDocumentation from '../../documentations/SpinnerDocumentation'
import TabDocumentation from '../../documentations/TabDocumentation'
import TableDocumentation from '../../documentations/TableDocumentation'
import TooltipDocumentation from '../../documentations/TooltipDocumentation'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='components'>
          <Route path='button' element={<ButtonDocumentation />} />
          <Route path='badges' element={<BadgeDocumentation />} />
          <Route path='breadcrumb' element={<BreadcrumbDocumentation />} />
          <Route path='tag' element={<TagifyDocumentation />} />
          <Route path='pagination' element={<PaginationDocumentation />} />
          <Route path='card' element={<CardDocumentation />} />
          <Route path='separator' element={<SeparatorDocumentation />} />
          <Route path='forms' element={<FormsDocumentation />} />
          <Route path='form-control' element={<FormControlDocumentation />} />
          <Route path='form-select' element={<FormSelectDocumentation />} />
          <Route path='check-radio' element={<CheckRadioDocumentation />} />
          <Route path='input-group' element={<InputGroupDocumentation /> }/>
          <Route path='floating-label' element={<FloatingLabelDocumentation />} />
          <Route path='form-validation' element={<FormValidationDocumentation />} />
          <Route path='accordion' element={<AccordionDocumentation />} />
          <Route path='alert' element={<AlertDocumentation />} />
          <Route path='modal' element={<ModalDocumentation />} />
          <Route path='popover' element={<PopoverDocumentation />} />
          <Route path='progress' element={<ProgressDocumentation />} />
          <Route path='spinner' element={<SpinnerDocumentation />} />
          <Route path='tab' element={<TabDocumentation />} />
          <Route path='table' element={<TableDocumentation />} />
          <Route path='tooltip' element={<TooltipDocumentation />} />
        </Route>
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
