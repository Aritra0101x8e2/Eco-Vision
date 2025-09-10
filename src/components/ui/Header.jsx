import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    {
      name: 'Dashboard',
      path: '/homepage-smart-environmental-dashboard',
      icon: 'BarChart3'
    },
    {
      name: 'Smart Map',
      path: '/smart-map-interface',
      icon: 'Map'
    },
    {
      name: 'Bin Network',
      path: '/bin-network-management',
      icon: 'Trash2'
    },
    {
      name: 'Education',
      path: '/environmental-education-center',
      icon: 'BookOpen'
    }
  ];

  const secondaryNavItems = [
    {
      name: 'Municipal Dashboard',
      path: '/municipal-dashboard',
      icon: 'Building2'
    },
    {
      name: 'About',
      path: '/about-eco-vision',
      icon: 'Info'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-header bg-card border-b border-border shadow-sm ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        
          <div className="flex items-center space-x-3">
            <Link 
              to="/homepage-smart-environmental-dashboard" 
              className="flex items-center space-x-3 transition-environmental hover:opacity-80"
              onClick={closeMobileMenu}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <circle cx="12" cy="19" r="3" fillOpacity="0.7" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-environmental-heading text-foreground">
                  Eco Vision
                </h1>
                <p className="text-xs text-muted-foreground font-community-accent">
                  Environmental Intelligence
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-environmental ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} />
              </Button>
              
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {secondaryNavItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-environmental ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-3">
            
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-environmental-good/10 rounded-full">
              <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
              <span className="text-xs font-medium text-environmental-good">
                Air Quality: Good
              </span>
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Bell" size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-accent-foreground font-medium">2</span>
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-4 py-3 space-y-1">
          
              <div className="space-y-1">
                {primaryNavItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-environmental ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-border my-2"></div>
              <div className="space-y-1">
                {secondaryNavItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-environmental ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between px-3 py-2 bg-environmental-good/10 rounded-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-environmental-good rounded-full animate-environmental-pulse"></div>
                    <span className="text-sm font-medium text-environmental-good">
                      Air Quality: Good
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;