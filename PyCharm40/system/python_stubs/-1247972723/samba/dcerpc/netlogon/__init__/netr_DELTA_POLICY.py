# encoding: utf-8
# module samba.dcerpc.netlogon
# from /usr/lib/python2.7/dist-packages/samba/dcerpc/netlogon.so
# by generator 1.135
""" netlogon DCE/RPC """

# imports
import dcerpc as __dcerpc
import talloc as __talloc


class netr_DELTA_POLICY(__talloc.Object):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    auditingmode = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    auditretentionperiod = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    db_create_time = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    eventauditoptions = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    maxauditeventcount = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    maxlogsize = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    primary_domain_name = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    quota_limits = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    sdbuf = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    SecurityInformation = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    sequence_num = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    sid = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown1 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown2 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown3 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown4 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown5 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown6 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown7 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    unknown8 = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default



