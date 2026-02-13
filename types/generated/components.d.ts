import type { Schema, Struct } from '@strapi/strapi';

export interface CmsAlert extends Struct.ComponentSchema {
  collectionName: 'components_cms_alerts';
  info: {
    displayName: 'Alert';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['default', 'destructive']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface CmsAvatar extends Struct.ComponentSchema {
  collectionName: 'components_cms_avatars';
  info: {
    displayName: 'Avatar';
  };
  attributes: {
    fallback: Schema.Attribute.String & Schema.Attribute.Required;
    src: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
  };
}

export interface CmsBadge extends Struct.ComponentSchema {
  collectionName: 'components_cms_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['default', 'secondary', 'destructive', 'outline']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface CmsBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_cms_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {
    maxLengthBeforeCollapse: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<2>;
    paths: Schema.Attribute.Component<'cms.breadcrumb-path', true> &
      Schema.Attribute.Required;
  };
}

export interface CmsBreadcrumbPath extends Struct.ComponentSchema {
  collectionName: 'components_cms_breadcrumb_paths';
  info: {
    displayName: 'BreadcrumbPath';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    to: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CmsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_cms_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    size: Schema.Attribute.Enumeration<['default', 'sm', 'lg']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface CmsImage extends Struct.ComponentSchema {
  collectionName: 'components_cms_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CmsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_cms_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface CmsRichTextParagraph extends Struct.ComponentSchema {
  collectionName: 'components_cms_rich_text_paragraphs';
  info: {
    displayName: 'RichTextParagraph';
  };
  attributes: {
    value: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface NavigationNavigationCategory extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_categories';
  info: {
    displayName: 'NavigationCategory';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    items: Schema.Attribute.Component<'navigation.navigation-item', true> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_items';
  info: {
    displayName: 'NavigationItem';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms.alert': CmsAlert;
      'cms.avatar': CmsAvatar;
      'cms.badge': CmsBadge;
      'cms.breadcrumb': CmsBreadcrumb;
      'cms.breadcrumb-path': CmsBreadcrumbPath;
      'cms.button-link': CmsButtonLink;
      'cms.image': CmsImage;
      'cms.paragraph': CmsParagraph;
      'cms.rich-text-paragraph': CmsRichTextParagraph;
      'navigation.navigation-category': NavigationNavigationCategory;
      'navigation.navigation-item': NavigationNavigationItem;
    }
  }
}
