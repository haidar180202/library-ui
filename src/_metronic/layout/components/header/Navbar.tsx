import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-md-4'

const Navbar = () => {
  const {config} = useLayout()
  return (
    <div className='app-navbar flex-shrink-0'>

      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>
    </div>
  )
}

export {Navbar}
