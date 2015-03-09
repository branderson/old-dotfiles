# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


from ItemModelSimple import ItemModelSimple

class TextModel(ItemModelSimple):
    """
    Object GooCanvasTextModel
    
    Properties from GooCanvasTextModel:
      x -> gdouble: X
        The x coordinate of the text
      y -> gdouble: Y
        The y coordinate of the text
      width -> gdouble: Width
        The width to use to layout the text
      height -> gdouble: Height
        The height to use to layout the text, or -1 to use the natural height
      text -> gchararray: Text
        The text to display
      use-markup -> gboolean: Use Markup
        Whether to parse PangoMarkup in the text, to support different styles
      anchor -> GtkAnchorType: Anchor
        How to position the text relative to the given x and y coordinates
      alignment -> PangoAlignment: Alignment
        How to align the text
      ellipsize -> PangoEllipsizeMode: Ellipsize
        The preferred place to ellipsize the string, if the label does not have enough room to display the entire string
      wrap -> PangoWrapMode: Wrap
        The preferred method of wrapping the string if a width has been set
    
    Signals from GooCanvasItemModel:
      child-notify (GParam)
      animation-finished (gboolean)
      child-added (gint)
      child-moved (gint, gint)
      child-removed (gint)
      changed (gboolean)
    
    Properties from GooCanvasItemModelSimple:
      stroke-pattern -> GooCairoPattern: Stroke Pattern
        The pattern to use to paint the perimeter of the item, or NULL disable painting
      fill-pattern -> GooCairoPattern: Fill Pattern
        The pattern to use to paint the interior of the item, or NULL to disable painting
      fill-rule -> GooCairoFillRule: Fill Rule
        The fill rule used to determine which parts of the item are filled
      operator -> GooCairoOperator: Operator
        The compositing operator to use
      antialias -> GooCairoAntialias: Antialias
        The antialiasing mode to use
      line-width -> gdouble: Line Width
        The line width to use for the item's perimeter
      line-cap -> GooCairoLineCap: Line Cap
        The line cap style to use
      line-join -> GooCairoLineJoin: Line Join
        The line join style to use
      line-join-miter-limit -> gdouble: Miter Limit
        The smallest angle to use with miter joins, in degrees. Bevel joins will be used below this limit
      line-dash -> GooCanvasLineDash: Line Dash
        The dash pattern to use
      font -> gchararray: Font
        The base font to use for the text
      font-desc -> PangoFontDescription: Font Description
        The attributes specifying which font to use
      hint-metrics -> GooCairoHintMetrics: Hint Metrics
        The hinting to be used for font metrics
      stroke-color -> gchararray: Stroke Color
        The color to use for the item's perimeter. To disable painting set the 'stroke-pattern' property to NULL
      stroke-color-rgba -> guint: Stroke Color RGBA
        The color to use for the item's perimeter, specified as a 32-bit integer value. To disable painting set the 'stroke-pattern' property to NULL
      stroke-pixbuf -> GdkPixbuf: Stroke Pixbuf
        The pixbuf to use to draw the item's perimeter. To disable painting set the 'stroke-pattern' property to NULL
      fill-color -> gchararray: Fill Color
        The color to use to paint the interior of the item. To disable painting set the 'fill-pattern' property to NULL
      fill-color-rgba -> guint: Fill Color RGBA
        The color to use to paint the interior of the item, specified as a 32-bit integer value. To disable painting set the 'fill-pattern' property to NULL
      fill-pixbuf -> GdkPixbuf: Fill Pixbuf
        The pixbuf to use to paint the interior of the item. To disable painting set the 'fill-pattern' property to NULL
      clip-path -> gchararray: Clip Path
        The sequence of path commands specifying the clip path
      clip-fill-rule -> GooCairoFillRule: Clip Fill Rule
        The fill rule used to determine which parts of the item are clipped
    
    Signals from GooCanvasItemModel:
      child-notify (GParam)
      animation-finished (gboolean)
      child-added (gint)
      child-moved (gint, gint)
      child-removed (gint)
      changed (gboolean)
    
    Signals from GObject:
      notify (GParam)
    """
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __gtype__ = None # (!) real value is ''


