import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Components</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
      to='/components'
      title='Base UI'
      fontIcon='bi-app-indicator'
      icon='row-horizontal'
      >
        <SidebarMenuItem
          to='/components/button'
          icon='element-11'
          title='Buttons'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/badges'
          icon='element-11'
          title='Badges'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/breadcrumb'
          icon='element-11'
          title='Breadcrumb'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/tag'
          icon='element-11'
          title='Tag'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/pagination'
          icon='element-11'
          title='Pagination'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/card'
          icon='element-11'
          title='Card'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/separator'
          icon='element-11'
          title='Separator'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='/components/forms'
          icon='element-11'
          title='Forms'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='components/accordion'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Accordion'
        />
        <SidebarMenuItem 
          to='components/alert'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Alert'
        />
        <SidebarMenuItem 
          to='components/modal'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Modal'
        />
        <SidebarMenuItem
          to='components/popover'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Popover'
        />
        <SidebarMenuItem
          to='components/progress'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Progress'
        />
        <SidebarMenuItem
          to='components/spinner'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Spinner'
        />
        <SidebarMenuItem
          to='components/tab'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Tabs'
        />
        <SidebarMenuItem
          to='components/table'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Table'
        />
        <SidebarMenuItem
          to='components/tooltip'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Tooltip'
        />

      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/components/forms'
        icon='element-2'
        fontIcon='bi-app-indicator'
        title='Forms'
      >
        <SidebarMenuItem 
          to='components/form-control'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Form Control'
        />
        <SidebarMenuItem 
          to='components/form-select'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Form Select'
        />
        <SidebarMenuItem 
          to='components/check-radio'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Checks & Radio'
        />
        <SidebarMenuItem 
          to='components/input-group'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Input Group'
        />
        <SidebarMenuItem
          to='components/floating-label'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Floating Label'
        />
        <SidebarMenuItem
          to='components/form-validation'
          icon='element-11'
          fontIcon='bi-app-indicator'
          title='Form Validation'
        />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
